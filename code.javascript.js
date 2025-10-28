const tools = [
    {
        name: 'PDF to Word Converter',
        description: 'Convert PDF files to Word documents.',
        link: 'pdf-to-word.html'
    },
    {
        name: 'Image Compressor',
        description: 'Compress images to reduce file size.',
        link: 'image-compressor.html'
    },
    {
        name: 'QR Code Generator',
        description: 'Generate QR codes from text or URLs.',
        link: 'qr-generator.html'
    },
    {
        name: 'Word Counter',
        description: 'Count words and characters in your text.',
        link: 'word-counter.html'
    }
];

const container = document.getElementById('tools-container');
tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <button onclick="window.location.href='${tool.link}'">Use Tool</button>
    `;
    container.appendChild(card);
});
