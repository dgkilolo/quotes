export class Quote {

  showDescription: boolean;

  constructor( public name: string, public description: string, public submittedBy: string, public time:Date ){
    this.showDescription = false;
  }

  

}
