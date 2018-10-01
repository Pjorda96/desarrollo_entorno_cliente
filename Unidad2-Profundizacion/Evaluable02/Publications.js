class Publications{

    constructor(title, ...author){

        //var publication = new Map();
        var authors = new Map();
        let cont = 0;

        this.title = title;

        for (auth in author){
            authors.set(cont, auth);
            cont++;
        }

        this.author = authors;
    }

}