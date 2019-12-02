import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
	private ApplicationEndpoint: string = "https://localhost:44343/";
	private ODataEndpoint: string = "http://localhost:49442";
	private ODataDropEndpoint: string = "http://localhost:49442/Employees";

	public UseODataEndpoint(): string {
		return `${this.ODataEndpoint}`;
	}

	public UseODataDropEndpoint(): string {
		return `${this.ODataDropEndpoint}`;
	}

	public UseApplicationEndpoint(query: string): string {
		return `${this.ApplicationEndpoint}${query}`;
	}
}
