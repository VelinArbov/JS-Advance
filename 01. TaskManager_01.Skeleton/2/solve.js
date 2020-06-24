function solve() {

    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return [`Title: ${this.title}`,
                `Content: ${this.content}`
            ].join('\n');
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {


            if (content.length >= 150) {

                throw new Error("Short reports content should be less then 150 symbols.");

            } else if (originalResearch.hasOwnProperty('title') === false ||
                originalResearch.hasOwnProperty('author') === false) {

                throw new Error("The original research should have author and title.");

            };

            super(title, content)
            this.comments = [];
            this.originalResearches = originalResearch;
        }


        addComment(comment) {

            this.comments.push(comment);
            return "The comment is added.";
        };

        toString() {
            const result = [
                super.toString(),
                `Original Research: ${ this.originalResearches.title } by ${ this.originalResearches.author }`,

            ];

            if (this.comments.length > 0) {
                result.push('Comments:')
                this.comments.forEach(c => result.push(c));

            };

            return result.join('\n');
        }


    }




    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content)

            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            if (this.clients.find(c=> c.clientName == clientName) !== undefined) {

                throw new Error("This client has already ordered this review.")

            }
            this.clients.push({
                clientName,
                orderDescription
            });

            return `${ clientName } has ordered a review for ${this.book.name }`
        }

        toString() {
            const result = [
                super.toString(),
                `Book: ${this.book.name  }`

            ];

            if (this.clients.length > 0) {
                result.push('Orders:')
                this.clients.forEach(c => result.push(
                    `${ c.clientName } - ${ c.orderDescription }`
                ));

            };

            return result.join('\n');
        }
    }



    return {
        Article,
        ShortReports,
        BookReview
    }
}



let classes = solve();

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 



