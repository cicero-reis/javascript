"use strict";

const Library = ( function() {

    let titlePrivate = new Map();

    function Library() {
        titlePrivate 
    }

    Library.prototype.setTitle = function (title, value) {
        titlePrivate.set(title, value);
    }

    Library.prototype.getTitle = function() {
        //return titlePrivate.get(this);
    }

    Library.prototype.getSize = function() {
        return titlePrivate.size;
    }

    Library.prototype.getKeys = function () {
        return titlePrivate.keys();
    }

    Library.prototype.getValues = function() {
        return titlePrivate.values();
    }

    Library.prototype.getEntries = function () {
        return titlePrivate.entries();
    }
    
    return Library;

}());

const librarys = new Library();

librarys.setTitle('aluno1', 'Fulano');
librarys.setTitle('aluno2', 'Maria');
librarys.setTitle('aluno3', 'Angela');

console.log(librarys.getSize());

for (let key of librarys.getKeys()) {
    console.log(key);
}

for (let value of librarys.getValues()) {
    console.log(value);
}

for (let object of librarys.getEntries()) {
    console.log(object);
}

