export interface IQuestionPattern {
    pattern: RegExp;
    response: string | ((matches: RegExpMatchArray) => string);
}

export interface IChatbot {
    ask(question: string): string;
}
