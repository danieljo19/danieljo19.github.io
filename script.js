function cek()
{
    let hasil = document.getElementById("hasil").value;
    if(hasil >= 0 && hasil <= 40)
    {
        document.getElementById("demo").innerHTML = "Nilai Anda : E";
    }
    else if(hasil >= 41 && hasil <= 55)
    {
        document.getElementById("demo").innerHTML = "Nilai Anda : D";
    }
    else if(hasil >= 56 && hasil <= 60)
    {
        document.getElementById("demo").innerHTML = "Nilai Anda : C";
    }
    else if(hasil >= 61 && hasil <= 65)
    {
        document.getElementById("demo").innerHTML = "Nilai Anda : BC";
    }
    else if(hasil >= 66 && hasil <= 70)
    {
        document.getElementById("demo").innerHTML = "Nilai Anda : B";
    }
    else if(hasil >= 71 && hasil <= 80)
    {
        document.getElementById("demo").innerHTML = "Nilai Anda : AB";
    }
    else if(hasil >= 81 && hasil <= 100)
    {
        document.getElementById("demo").innerHTML = "Nilai Anda : A";
    }
    else 
    {
        document.getElementById("demo").innerHTML = "Silahkan ulangi, karena inputan tidak sesuai atau melebihi batas konversi";
    }
    document.getElementById("hasil").innerHTML = document.getElementById("demo").value;
}
document.getElementById("hasil").addEventListener("onlick", cek)

function tambah()
{
    let b1 = parseInt(document.getElementById("b1").value);
    let b2 = parseInt(document.getElementById("b2").value);

    let hasil1 = b1 + b2;
    if(b1 == null && b2 == null)
    {
        document.getElementById("cek1").innerHTML = "Anda belum memasukkan angka";
    }
    else
    {
         document.getElementById("cek1").innerHTML = b1 + " + " + b2 + " = " + hasil1;
    }
}
function kurang()
{
    let b1 = parseInt(document.getElementById("b1").value);
    let b2 = parseInt(document.getElementById("b2").value);

    let hasil1 = b1 - b2;
    if(b1 == null && b2 == null)
    {
        document.getElementById("cek1").innerHTML = "Anda belum memasukkan angka";
    }
    else
    {
        document.getElementById("cek1").innerHTML = b1 + " - " + b2 + " = " + hasil1;
    }
}
function kali()
{
    let b1 = parseInt(document.getElementById("b1").value);
    let b2 = parseInt(document.getElementById("b2").value);

    let hasil1 = b1 * b2;
    if(b1 == null && b2 == null)
    {
        document.getElementById("cek1").innerHTML = "Anda belum memasukkan angka";
    }
    else
    {
    document.getElementById("cek1").innerHTML = b1 + " * " + b2 + " = " + hasil1;
    }
}
function bagi()
{
    let b1 = parseInt(document.getElementById("b1").value);
    let b2 = parseInt(document.getElementById("b2").value);

    let hasil1 = b1 / b2;
    if(b1 == null && b2 == null)
    {
        document.getElementById("cek1").innerHTML = "Anda belum memasukkan angka";
    }
    else
    {   
        document.getElementById("cek1").innerHTML = b1 + " / " + b2 + " = " + hasil1;
    }
}
