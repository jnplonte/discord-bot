import {
	toJson,
	toString,
	isEmail,
	isEmpty,
	isNotEmpty,
	cleanData,
	isEmptyObject,
	isStringExist,
	checkObjectInList,
	replaceHtml,
	generateRandomString,
	isInteger,
	isInArray,
	titleCase,
} from 'jnpl-helper';

export class Helper {
	env: string = process.env.NODE_ENV || 'local';

	constructor(private config) {}

	toJson(jsonData: any = ''): any {
		return toJson(jsonData);
	}

	toString(jsonData: any = ''): any {
		return toString(jsonData);
	}

	cleanData(data: any = ''): any {
		return cleanData(data);
	}

	isEmptyObject(obj: Object = {}): boolean {
		return isEmptyObject(obj);
	}

	stringExist(string: string = '', character: string = ''): boolean {
		return isStringExist(string, character);
	}

	isNotEmpty(v: any = null): boolean {
		return isNotEmpty(v);
	}

	isEmpty(v: any = null): boolean {
		return isEmpty(v);
	}

	isEmail(email: string = ''): boolean {
		return isEmail(email);
	}

	validateData(obj: Object = {}, list: Array<any> = []): boolean {
		return checkObjectInList(obj, list);
	}

	replaceHtml(html: string = '', data: Object = {}): string {
		return replaceHtml(html, data);
	}

	generateRandomString(num: number = 10): string {
		return generateRandomString(num);
	}

	isInteger(num: number = 0): boolean {
		return isInteger(num);
	}

	isInArray(value: any = '', array: Array<any> = []): boolean {
		return isInArray(value, array);
	}

	titleCase(string: string = ''): string {
		return titleCase(string);
	}

	get secretKey(): string {
		return this.config.secretKey || '';
	}

	get secretHash(): string {
		return this.config.secretKeyHash || '';
	}
}
