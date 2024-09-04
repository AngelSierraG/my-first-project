import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsI } from './models/products';
import { FakestoreServiceService } from './services/fakestore-service.service';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { environment } from '../environments/dev'; 

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(environment.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  myBool = true
  public showSpinner: boolean =  false

  

  displayedColumns: string[] = ['id','title', 'price', 'image', 'category', 'rating'];
  dataSource : any[] = [] 
  myArray = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ]

  constructor(private fakeStoreService: FakestoreServiceService) { }
  async ngOnInit() {
    
   await this.getProducts()
   //this.showSpinner = false
   
   console.log(this.dataSource)

   await this.generateText()

   
  }

  async getProducts(){
    this.showSpinner = true
     this.fakeStoreService.getProducts().subscribe(
      
      data => 
      {
        this.dataSource = data
        this.showSpinner = false
      }
      )
    console.log(this.dataSource)
    //this.showSpinner = false
  }

  async generateText() {

    console.log(environment.API_KEY)

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hola, ¿Puedes responder en español?" }],
        },
        {
          role: "model",
          parts: [{ text: "Claro, dime ¿qué deseas saber o comentar?" }],
        },
      ],
    });
    let result = await chat.sendMessage("¿Cuál es la mejora ciudad de Chiapas, México para visitar?");
    console.log(result.response.text());
    result = await chat.sendMessage("Me gusta la Historia y la Cultura, San Cristóbal de las Casas me parece bien. ¿Qué sitios me recomiendas visitar?");
    console.log(result.response.text());

    }
    
}
