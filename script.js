// AI Tools Data
const aiTools = [
    // Text Generation
    {
        name: "ChatGPT",
        description: "Advanced conversational AI that can answer questions, generate text, and assist with various tasks.",
        category: "text",
        price: "freemium",
        url: "https://chat.openai.com",
        icon: "fa-comment-dots"
    },
    {
        name: "Gemini (formerly Bard)",
        description: "Google's most advanced AI model for creative collaboration and information synthesis.",
        category: "text",
        price: "free",
        url: "https://gemini.google.com",
        icon: "fa-google"
    },
    {
        name: "DeepSeek Chat",
        description: "Advanced AI assistant specialized in technical and research-oriented conversations.",
        category: "text",
        price: "free",
        url: "https://deepseek.com",
        icon: "fa-robot"
    },
    {
        name: "Claude",
        description: "AI assistant focused on helpful, harmless, and honest conversations.",
        category: "text",
        price: "free",
        url: "https://claude.ai",
        icon: "fa-leaf"
    },
    {
        name: "Perplexity",
        description: "AI search engine that provides direct answers with cited sources.",
        category: "text",
        price: "freemium",
        url: "https://www.perplexity.ai",
        icon: "fa-search"
    },
    {
        name: "Copy.ai",
        description: "AI-powered copywriting tool for marketing content, blogs, and more.",
        category: "text",
        price: "freemium",
        url: "https://www.copy.ai",
        icon: "fa-pen-fancy"
    },
    {
        name: "Jasper",
        description: "AI content generator for businesses creating marketing copy and blog posts.",
        category: "text",
        price: "paid",
        url: "https://www.jasper.ai",
        icon: "fa-newspaper"
    },
    {
        name: "Quillbot",
        description: "AI paraphrasing tool that helps rewrite and enhance your writing.",
        category: "text",
        price: "freemium",
        url: "https://quillbot.com",
        icon: "fa-keyboard"
    },
    {
        name: "Writer",
        description: "AI writing assistant for businesses with style guide enforcement.",
        category: "text",
        price: "paid",
        url: "https://writer.com",
        icon: "fa-pen"
    },
    {
        name: "Sudowrite",
        description: "AI writing tool designed specifically for fiction writers.",
        category: "text",
        price: "paid",
        url: "https://www.sudowrite.com",
        icon: "fa-book-open"
    },

    // Image Generation
    {
        name: "Midjourney",
        description: "AI-powered image generation tool that creates stunning artwork from text prompts.",
        category: "image",
        price: "paid",
        url: "https://www.midjourney.com",
        icon: "fa-image"
    },
    {
        name: "DALL-E 3",
        description: "Latest version of OpenAI's image generation system with improved quality.",
        category: "image",
        price: "freemium",
        url: "https://openai.com/dall-e-3",
        icon: "fa-paint-brush"
    },
    {
        name: "Stable Diffusion",
        description: "Open source text-to-image model for generating detailed images.",
        category: "image",
        price: "free",
        url: "https://stablediffusionweb.com",
        icon: "fa-magic"
    },
    {
        name: "Adobe Firefly",
        description: "Creative generative AI models built into Adobe products for image generation.",
        category: "image",
        price: "freemium",
        url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
        icon: "fa-adobe"
    },
    {
        name: "Leonardo.AI",
        description: "AI platform for generating game assets, concept art, and creative images.",
        category: "image",
        price: "freemium",
        url: "https://leonardo.ai",
        icon: "fa-gamepad"
    },
    {
        name: "Runway ML",
        description: "Creative toolkit with AI tools for image generation and editing.",
        category: "image",
        price: "freemium",
        url: "https://runwayml.com",
        icon: "fa-sliders-h"
    },

    // Video Generation
    {
        name: "InStories",
        description: "AI-powered platform for creating short marketing videos with automatic voiceovers and animations.",
        category: "video",
        price: "freemium",
        url: "https://instories.com",
        icon: "fa-video"
    },
    {
        name: "Synthesia",
        description: "Create AI videos with virtual presenters speaking in multiple languages.",
        category: "video",
        price: "paid",
        url: "https://www.synthesia.io",
        icon: "fa-video"
    },
    {
        name: "Pictory",
        description: "AI video creation tool that turns scripts and articles into engaging videos.",
        category: "video",
        price: "paid",
        url: "https://pictory.ai",
        icon: "fa-photo-video"
    },
    {
        name: "HeyGen",
        description: "Create AI-powered video avatars that can speak in multiple languages.",
        category: "video",
        price: "freemium",
        url: "https://www.heygen.com",
        icon: "fa-user-astronaut"
    },
    {
        name: "Descript",
        description: "AI-powered video and audio editing tool with transcription capabilities.",
        category: "video",
        price: "freemium",
        url: "https://www.descript.com",
        icon: "fa-edit"
    },
    {
        name: "Fliki",
        description: "Create videos with AI voices and stock footage from text.",
        category: "video",
        price: "freemium",
        url: "https://fliki.ai",
        icon: "fa-film"
    },

    // Audio Generation
    {
        name: "ElevenLabs",
        description: "AI voice generator that produces natural sounding speech in multiple languages.",
        category: "audio",
        price: "freemium",
        url: "https://elevenlabs.io",
        icon: "fa-microphone"
    },
    {
        name: "Murf",
        description: "AI voice generator for creating realistic voiceovers for videos and presentations.",
        category: "audio",
        price: "freemium",
        url: "https://murf.ai",
        icon: "fa-volume-up"
    },
    {
        name: "Resemble AI",
        description: "Create custom AI voices and clone existing voices with consent.",
        category: "audio",
        price: "paid",
        url: "https://www.resemble.ai",
        icon: "fa-voice"
    },
    {
        name: "Voicemod",
        description: "Real-time AI voice changer and soundboard for content creators.",
        category: "audio",
        price: "freemium",
        url: "https://www.voicemod.net",
        icon: "fa-headset"
    },

    // Code Generation
    {
        name: "GitHub Copilot",
        description: "AI pair programmer that suggests code and entire functions in real-time.",
        category: "code",
        price: "paid",
        url: "https://github.com/features/copilot",
        icon: "fa-code"
    },
    {
        name: "Amazon CodeWhisperer",
        description: "AI coding companion that generates real-time code suggestions.",
        category: "code",
        price: "freemium",
        url: "https://aws.amazon.com/codewhisperer/",
        icon: "fa-aws"
    },
    {
        name: "Tabnine",
        description: "AI code completion tool that supports multiple programming languages.",
        category: "code",
        price: "freemium",
        url: "https://www.tabnine.com",
        icon: "fa-keyboard"
    },
    {
        name: "Replit Ghostwriter",
        description: "AI pair programmer built into the Replit online IDE.",
        category: "code",
        price: "freemium",
        url: "https://replit.com/site/ghostwriter",
        icon: "fa-terminal"
    },

    // Productivity
    {
        name: "Notion AI",
        description: "AI-powered workspace that helps with writing, summarization, and task management.",
        category: "productivity",
        price: "freemium",
        url: "https://www.notion.so/product/ai",
        icon: "fa-clipboard-list"
    },
    {
        name: "Grammarly",
        description: "AI-powered writing assistant that checks grammar, spelling, and style.",
        category: "productivity",
        price: "freemium",
        url: "https://www.grammarly.com",
        icon: "fa-spell-check"
    },
    {
        name: "Otter.ai",
        description: "AI-powered transcription service that converts speech to text in real-time.",
        category: "productivity",
        price: "freemium",
        url: "https://otter.ai",
        icon: "fa-headphones"
    },
    {
        name: "Fireflies",
        description: "AI meeting assistant that records, transcribes, and analyzes conversations.",
        category: "productivity",
        price: "freemium",
        url: "https://fireflies.ai",
        icon: "fa-calendar-check"
    },

    // Business
    {
        name: "Tome",
        description: "AI-powered storytelling tool that helps create compelling presentations.",
        category: "business",
        price: "freemium",
        url: "https://tome.app",
        icon: "fa-chart-line"
    },
    {
        name: "Beautiful.ai",
        description: "AI-powered presentation software that designs slides automatically.",
        category: "business",
        price: "paid",
        url: "https://www.beautiful.ai",
        icon: "fa-object-group"
    },
    {
        name: "Cody",
        description: "AI business assistant that can answer questions about your company.",
        category: "business",
        price: "paid",
        url: "https://cody.ai",
        icon: "fa-briefcase"
    },
    {
        name: "ChatPDF",
        description: "AI tool that lets you chat with any PDF document.",
        category: "business",
        price: "freemium",
        url: "https://www.chatpdf.com",
        icon: "fa-file-pdf"
    },

    // Education
    {
        name: "Khanmigo",
        description: "AI tutor from Khan Academy that provides personalized learning assistance.",
        category: "education",
        price: "paid",
        url: "https://www.khanacademy.org/khan-labs",
        icon: "fa-graduation-cap"
    },
    {
        name: "Elicit",
        description: "AI research assistant that helps with literature reviews and summaries.",
        category: "education",
        price: "freemium",
        url: "https://elicit.org",
        icon: "fa-book"
    },
    {
        name: "Quizlet Learn",
        description: "AI-powered study tools that adapt to your learning style.",
        category: "education",
        price: "freemium",
        url: "https://quizlet.com/features/learn",
        icon: "fa-question-circle"
    },

    // Research
    {
        name: "Consensus",
        description: "AI research tool that finds and summarizes scientific papers.",
        category: "research",
        price: "freemium",
        url: "https://consensus.app",
        icon: "fa-flask"
    },
    {
        name: "Scite",
        description: "AI assistant for scientific research that analyzes citation contexts.",
        category: "research",
        price: "paid",
        url: "https://scite.ai",
        icon: "fa-microscope"
    },

    // Design
    {
        name: "Canva Magic",
        description: "AI-powered design tools within Canva for quick content creation.",
        category: "design",
        price: "freemium",
        url: "https://www.canva.com/magic-write/",
        icon: "fa-pencil-ruler"
    },
    {
        name: "Uizard",
        description: "AI tool for designing UIs, wireframes, and prototypes.",
        category: "design",
        price: "freemium",
        url: "https://uizard.io",
        icon: "fa-object-ungroup"
    }
];

// DOM Elements
const toolsContainer = document.getElementById('toolsContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const totalToolsElement = document.getElementById('totalTools');
const freeToolsElement = document.getElementById('freeTools');
const totalCategoriesElement = document.getElementById('totalCategories');
const currentYearElement = document.getElementById('currentYear');

// Display current year
currentYearElement.textContent = new Date().getFullYear();

// Display all tools initially
displayTools(aiTools);

// Update stats
updateStats();

// Search functionality
searchButton.addEventListener('click', filterTools);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterTools();
    }
});

// Filter functionality
categoryFilter.addEventListener('change', filterTools);
priceFilter.addEventListener('change', filterTools);

// Function to display tools
function displayTools(tools) {
    toolsContainer.innerHTML = '';
    
    if (tools.length === 0) {
        toolsContainer.innerHTML = '<p class="no-results">No tools found matching your criteria.</p>';
        return;
    }
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        const priceClass = tool.price === 'free' ? 'success' : tool.price === 'freemium' ? 'warning' : 'danger';
        const priceText = tool.price === 'free' ? 'Free' : tool.price === 'freemium' ? 'Freemium' : 'Paid';
        
        toolCard.innerHTML = `
            <div class="tool-header">
                <h2><i class="fas ${tool.icon}"></i> ${tool.name}</h2>
                <p>${getCategoryName(tool.category)}</p>
            </div>
            <div class="tool-body">
                <span class="tool-category">${tool.category}</span>
                <p class="tool-description">${tool.description}</p>
            </div>
            <div class="tool-footer">
                <span class="tool-price">${priceText}</span>
                <a href="${tool.url}" target="_blank" class="tool-link">Visit <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        
        toolsContainer.appendChild(toolCard);
    });
}

// Function to filter tools based on search and filters
function filterTools() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const price = priceFilter.value;
    
    const filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                            tool.description.toLowerCase().includes(searchTerm) ||
                            tool.category.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || tool.category === category;
        const matchesPrice = price === 'all' || tool.price === price;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    displayTools(filteredTools);
}

// Function to update statistics
function updateStats() {
    totalToolsElement.textContent = aiTools.length;
    
    const freeToolsCount = aiTools.filter(tool => tool.price === 'free').length;
    freeToolsElement.textContent = freeToolsCount;
    
    const categories = new Set(aiTools.map(tool => tool.category));
    totalCategoriesElement.textContent = categories.size;
}

// Helper function to get category name
function getCategoryName(category) {
    const categoryNames = {
        'text': 'Text Generation',
        'image': 'Image Generation',
        'video': 'Video Generation',
        'audio': 'Audio Generation',
        'code': 'Code Generation',
        'productivity': 'Productivity',
        'business': 'Business',
        'education': 'Education'
    };
    
    return categoryNames[category] || category;
}
