function PaperRequirements(book1, book2, book3) {
    const firstBooKpage = 100;
    const secondBooKpage = 200;
    const thirdBooKpage = 300;

    const firstBookTotalPage = book1 * firstBooKpage;
    const secondBookTotalPage = book2 * secondBooKpage;
    const thirdBookTotalPage = book3 * thirdBooKpage;

    const totalBookPage = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return totalBookPage;

}


const totalpage = PaperRequirements(1, 1, 1);
console.log(totalpage);




