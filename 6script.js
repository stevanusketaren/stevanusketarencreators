$(document).ready(function() {
    // Array untuk menyimpan buku
    let books = [];

    // Event listener untuk form submit
    $('#book-form').submit(function(event) {
        event.preventDefault(); // Mencegah form dari refresh otomatis

        // Mengambil data dari input
        const title = $('#title').val();
        const author = $('#author').val();
        const year = $('#year').val();

        // Menambahkan buku baru ke array
        books.push({ title, author, year });

        // Memperbarui daftar buku
        updateBookList();

        // Mengosongkan input form
        $('#title').val('');
        $('#author').val('');
        $('#year').val('');
    });

    // Fungsi untuk memperbarui tampilan daftar buku
    function updateBookList() {
        $('#books').empty(); // Menghapus daftar buku lama

        // Menambahkan setiap buku ke dalam list
        books.forEach(function(book, index) {
            const bookItem = `<li>
                                <span>Judul:</span> ${book.title} <br>
                                <span>Penulis:</span> ${book.author} <br>
                                <span>Tahun Terbit:</span> ${book.year}
                              </li>`;
            $('#books').append(bookItem);
        });
    }
});
