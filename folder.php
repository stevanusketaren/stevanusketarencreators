<!DOCTYPE html>
<html>
<head>
    <title>Kalkulator Sederhana</title>
</head>
<body>
    <form action="hasil_hitung.php" method="post">
        Bilangan 1: <input type="number" name="bil1" required><br>
        Bilangan 2: <input type="number" name="bil2" required><br>
        Operasi: 
        <select name="operator">
            <option value="tambah">Tambah</option>
            <option value="kurang">Kurang</option>
            <option value="kali">Kali</option>
            <option value="bagi">Bagi</option>
        </select><br>
        <button type="submit">Hitung</button>
    </form>
</body>
</html>


