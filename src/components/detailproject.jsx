import React from 'react';
import './index.css'
import foto1 from '../img/imgportfolio/1. Beranda.JPG'
import foto2 from '../img/imgportfolio/2. Navbar.JPG'
import foto3 from '../img/imgportfolio/3. Registrasi.JPG'
import foto4 from '../img/imgportfolio/4. Login.JPG'
import foto5 from '../img/imgportfolio/5. Keranjang.JPG'
import foto6 from '../img/imgportfolio/6. Checkout.JPG'
import foto7 from '../img/imgportfolio/7. Confirm.JPG'
import foto8 from '../img/imgportfolio/8. Invoice.JPG'
import foto9 from '../img/imgportfolio/9. Account Profil.JPG'

const data = [
    {
        id: 1,
        image: foto1,
        title: 'Halaman Beranda',
        description: 'Pada halaman ini menampilkan seluruh produk'
    },
    {
        id: 2,
        image: foto2,
        title: 'Navbar',
        description: 'Pada bagian navabar terdiri dari beberapa menu diantaranya menu kategori, menu search, menu keranjang dan menu profil. Pada menu kategori terdapat sub menu yang merupakan kategori dari produk. Apabila menu ini di klik maka hanya akan tampil produk dengan kategori yang dipilih. Kemudian pada menu search digunakan untuk pencarian produk. Kemudian menu keranjang untuk melihat produk apa saja yang sudah ditambahkan ke dalam keranjang. Dan menu profil berguna untuk melihat profil dari user itu sendiri.'
    },
    {
        id: 3,
        image: foto3,
        title: 'Halaman Registrasi',
        description: 'Pada halaman ini menampilkan form untuk melakukan registrasi'
    },
    {
        id: 4,
        image: foto4,
        title: 'Halaman Login',
        description: 'Pada halaman ini user diminta memasukkan email dan password yang sudah didaftarkan sebelumnya'
    },
    {
        id: 5,
        image: foto5,
        title: 'Halaman Keranjang',
        description: 'Pada halaman ini menampilkan produk apa saja yang akan di beli. Terdapat jumlah total keseluruhan produk,  tombol untuk menambah atau mengurangi jumlah produk dan terdapat tombol checkout untu melanjukan proses pembelian produk.'
    },
    {
        id: 6,
        image: foto6,
        title: 'Halaman Checkout',
        description: 'Setelah klik tombol checkout pada halaman keranjang user akan diarahkan ke halaman checkout. Dimana pada halaman ini menampilkan alamat pengirimannya.'
    },
    {
        id: 7,
        image: foto7,
        title: 'Halaman Confirm',
        description: 'Halamn ini menampilkan data pembelian untuk mengkonfirmasi produk dan alamat sudah sesuai.'
    },
    {
        id: 8,
        image: foto8,
        title: 'Halaman Invoice',
        description: 'Pada halaman ini menampilkan invoice dari pesanan yang sudah dilakukan'
    },
    {
        id: 9,
        image: foto9,
        title: 'Halaman Profil',
        description: 'Pada halaman ini menampilan data data dari user, seperti data profil, data pemesanan, dan data alamat.'
    },
]

const DetailProject = () => {
    return (
        <div className='xxx'>
            <h1>Portofolio</h1>
            <div className='mt-3'>
                <h2>Website Toko Online</h2>
                <h4>React JS, Node JS, Express JS, MongoDB </h4>
            </div>
            <div className='mt-3'>
                <p>Website toko online ini dibuat menggunakan teknologi MERN (MongoDB, Express JS, React JS, Node JS), dimana pada bagian frontend development menggunakan React JS dan pada bagian backendnya menggunakan Node JS dan Express JS. Sedangkan MongoDB sebagi databasenya. Adapun fitur-fitur di dalam website e-commerce ini akan dijelaskan secara detail sebagai berikut. </p>
            </div>

            <div className="mt-5">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <article key={id} className="mt-5">
                            <h5>{title}</h5>

                            <p>{description}</p>
                            <div className="gambar mt-3 mb-2 ">
                                <img src={image} alt={title} />
                            </div>
                        </article>
                    );
                })}
            </div>

        </div>

    );
};

export default DetailProject;

