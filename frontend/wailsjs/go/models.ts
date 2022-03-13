/* Do not change, this code is generated from Golang structs */

export {};

export class Content {


    static createFrom(source: any = {}) {
        return new Content(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);

    }
}
export class Kobo {
    name: string;
    storage: number;
    display_ppi: number;
    mnt_path: string;
    db_path: string;

    static createFrom(source: any = {}) {
        return new Kobo(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.name = source["name"];
        this.storage = source["storage"];
        this.display_ppi = source["display_ppi"];
        this.mnt_path = source["mnt_path"];
        this.db_path = source["db_path"];
    }
}

export class Bookmark {


    static createFrom(source: any = {}) {
        return new Bookmark(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);

    }
}
