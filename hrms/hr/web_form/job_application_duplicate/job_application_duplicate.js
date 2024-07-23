frappe.ready(function() {
    function loadPdfJs(callback) {
        var script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.min.js";
        script.onload = callback;
        document.head.appendChild(script);
    }

    function extractTextFromPDF(file) {
        let reader = new FileReader();
        reader.onload = function(event) {
            let typedarray = new Uint8Array(event.target.result);

            loadPdfJs(function() {
                pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                    pdf.getPage(1).then(function(page) {
                        page.getTextContent().then(function(textContent) {
                            let resume_text = textContent.items.map(item => item.str).join(' ');
                            console.log(resume_text);
                            $('textarea[data-fieldname="resume_text"]').val(resume_text);
                            calculateATSScore(resume_text);
                        });
                    });
                });
            });
        };
        reader.readAsArrayBuffer(file);
    }

    $('<button class="btn btn-primary">Attach Resume</button>').appendTo('.web-form-actions').on('click', function() {
        $('<input type="file" accept=".pdf" />').on('change', function(e) {
            let file = e.target.files[0];
            if (file) {
                extractTextFromPDF(file);
            }
        }).click();
    });

    async function calculateATSScore(resume_text) {
        let job_title = $('input[data-fieldname="job_title"]').val();

        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Job Opening',
                name: job_title
            },
            callback: async function(r) {
                if (r.message) {
                    let job_description_html = r.message.description;
                    let job_description = $(job_description_html).text();
                    console.log(job_description);

                    const ats_score = await getATSScore(resume_text, job_description);
                    console.log('ATS Score:', ats_score);
                    $('input[data-fieldname="ats_score"]').val(ats_score + '%');
                }
            }
        });
    }

    async function getATSScore(resume_text, job_description) {
       const api_key = 'open-ai-key';
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo-instruct",
                prompt: `As an experienced Applicant Tracking System (ATS) analyst,
        with profound knowledge in technology, software engineering, data science, 
        and big data engineering, your role involves evaluating resumes against job descriptions.
        Recognizing the competitive job market, provide top-nNotch assistance for resume improvement.
        Your goal is to analyze the resume against the given job description, 
        assign a percentage match based on key criteria, and pinpoint missing keywords accurately.
        resume:${resume_text}
        description:${job_description}
        I want the response in one single string having the structure
        Job Description Match":"%"`,
                max_tokens: 50,
                temperature: 0.5
            })
        });

        const data = await response.json();
        const ats_score = extractScoreFromResponse(data.choices[0].text);
        console.log("ats_score", ats_score);
        return ats_score;
    }

    function extractScoreFromResponse(response_text) {
        let score = 0;
        try {
            console.log("response_text", response_text);
            const match = response_text.match(/Job Description Match: (\d+)%/);
            if (match) {
                score = parseInt(match[1]);
            }
        } catch (error) {
            console.error('Error extracting ATS score:', error);
        }
        return score;
    }

    // Ensure fields exist before trying to attach event handlers
    
});
