# PDF Easy-Chat-Pdf

## Description

This application allows users to upload PDF documents and engage in a chat-like interaction with the content. Powered by the Gemini API and utilizing Retrieval-Augmented Generation (RAG), it enables users to ask questions about the uploaded PDF and receive relevant, context-aware answers.

## Features

- PDF upload functionality
- Text extraction and indexing from uploaded PDFs
- Retrieval-Augmented Generation (RAG) for enhanced question answering
- Natural language processing using Gemini API
- Interactive chat interface for querying PDF content
- Real-time responses based on the document's content
- Contextual understanding of queries relative to the PDF content

## Technologies Used


- Frontend & Backend: Next.js
- PDF Processing: pdf-parse
- Vector Database: Pinecone

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pdf-chat-app.git
   ```

2. Navigate to the project directory:
   ```
   cd easy-chat-pdf
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Gemini API key and other necessary credentials:
     ```
     GEMINI_API_KEY=your_api_key_here
     VECTOR_DB_API_KEY=your_vector_db_api_key_here
     ```

5. Run the development server:
   ```
   npm run dev
   ```

## Usage

1. Open the application in your web browser (default: http://localhost:3000).
2. Click on the "Upload PDF" button and select a PDF file.
3. Once the PDF is uploaded and processed, you can start asking questions in the chat interface.
4. The application will use RAG to retrieve relevant information from the PDF and generate accurate answers using the Gemini API.

## How It Works

1. **PDF Processing**: When a PDF is uploaded, the application extracts and indexes the text content.
2. **Vector Embedding**: The indexed content is converted into vector embeddings and stored in a vector database.
3. **Query Processing**: When a user asks a question, the application uses RAG:
   - It retrieves the most relevant passages from the vector database.
   - These passages are sent to the Gemini API along with the user's question.
   - Gemini generates a response based on the retrieved context and the question.
4. **Response**: The generated answer is displayed to the user in the chat interface.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License


Project Link: [https://easy-chat-pdf.vercel.app/](https://easy-chat-pdf.vercel.app/) -->

