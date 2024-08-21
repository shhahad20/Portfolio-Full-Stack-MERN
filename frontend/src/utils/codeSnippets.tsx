
export const codeSnippets = [
  `
  import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
  import type { PayloadAction, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
  import { CompaniesState, CompaniesAction } from '../types';
   
  const initialState: CompaniesState = {
      data: [],
      isLoading: false,
      error: null,
      search: '',
      singleCompany: null
  };
  
  // Async Call | The first parameter is the action type, async function
  export const fetchData = createAsyncThunk('companies/fetchData', async () => {
      try {
          const response = await fetch('https://api.github.com/organizations');
          if (!response.ok) {
              throw new Error('Network response error');
          }
          const data = await response.json();
          return data;
      } catch (error) {console.log(error);}
  });
    `,
  `
    public class BFS {
        int vertexCount;
        int matrix[][];
            BFS(int vertexCount) {
            this.vertexCount = vertexCount;
            matrix = new int[vertexCount][vertexCount]; }

        public void addEdgeInMatrix(int source, int destination) {
            matrix[source][destination] = 1;
            matrix[destination][source] = 1;
        }
        public void deleteEdgeInMatrix(int source, int destination) {
            matrix[source][destination] = 0;
            matrix[destination][source] = 0;
        }

    `,
  `
speaker = pyttsx3.init()
"""VOICE"""
voices = speaker.getProperty('voices')
speaker.setProperty('voice', voices[1].id)
"""VOLUME"""
volume = speaker.getProperty('volume')
speaker.setProperty('volume', 1.0)
""" RATE"""
rate = speaker.getProperty('rate')
speaker.setProperty('rate', 170)
correct = True
while correct:
    try:
        user_p = int(input("Page Number: "))
        print(user_p)
        with pdfplumber.open("Python-Interview.pdf") as pdf_file:
            page = pdf_file.pages[user_p]
            pdf_text = page.extract_text()
            print(pdf_text)
            speaker.say(pdf_text)
            speaker.runAndWait()
            correct = False

    except ValueError:
        print("Enter a valid integer. 'Accept only numbers'")            
`,
];
