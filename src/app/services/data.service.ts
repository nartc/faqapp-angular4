import { Injectable } from '@angular/core';
import { Question } from '../models/question'

@Injectable()
export class DataService {
  questions: Array<Question> = [];

  constructor() { 
    // this.questions = [
    //   {
    //     text: "What is your name?",
    //     answer: "My name is Chau",
    //     hide: true
    //   },
    //   {
    //     text: "What is your education level?",
    //     answer: "My education level is Bachelor",
    //     hide: true
    //   },
    //   {
    //     text: "What is your favorite language?",
    //     answer: "My favorite language is Javascript",
    //     hide: true
    //   }
    // ]
  }

  getQuestions(){
    if(localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
    
    //Init local variable
    let questions;

    if(localStorage.getItem('questions') === null) {
      questions = [];
      //Push new question
      questions.unshift(question);
      
      //Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));

    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      //Add new question
      questions.unshift(question);
      
      //Re set LS
      localStorage.setItem('questions', JSON.stringify(questions));
      
    }
  }

  removeQuestion(question: Question) {
    for(let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
