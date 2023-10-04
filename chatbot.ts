// chatbot.ts

import { IQuestionPattern, IChatbot } from './interfaces';

export class Chatbot implements IChatbot {
    private patterns: IQuestionPattern[];
    private conversationState: any = {};
    private consecutiveUnknowns: number = 0;

    constructor(patterns: IQuestionPattern[]) {
        this.patterns = patterns;
    }

    private extractName(question: string): void {
        const nameMatch = question.match(/my name is (\w+)/i);
        if (nameMatch) {
            this.conversationState.name = nameMatch[1];
        }
    }

    private personalizedResponse(response: string): string {
        return this.conversationState.name ? response.replace('{name}', this.conversationState.name) : response.replace('{name}', '');
    }

    ask(question: string): string {
        this.extractName(question);

        for (let pattern of this.patterns) {
            const matches = question.match(pattern.pattern);
            if (matches) {
                this.consecutiveUnknowns = 0;
                let response = typeof pattern.response === 'function' ? pattern.response(matches) : pattern.response;
                return this.personalizedResponse(response);
            }
        }

        this.consecutiveUnknowns++;
        if (this.consecutiveUnknowns > 2) {
            return "I'm struggling to understand. Please clarify.";
        }

        return this.getFallbackResponse(question);
    }

    private getFallbackResponse(question: string): string {
        if (question.indexOf("weather") !== -1) {
            return "I can't provide weather information right now.";
        }
        if (question.indexOf("time") !== -1) {
            return "I don't have real-time capabilities.";
        }
        return "Can you rephrase?";
    }
}
