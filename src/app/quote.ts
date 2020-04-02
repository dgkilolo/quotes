export class Quote {
  upVote: number;
  downVote: number;
  showDescription: boolean;
  constructor( public name: string, public description: string, public submittedBy: string, public time:Date ){
    this.showDescription = false;
    this.upVote = 0;
    this.downVote = 0;
  }
}
