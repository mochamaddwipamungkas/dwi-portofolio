import React from 'react';
import './index.css'

const Contact = () => {
    return (

        <section>
            <div class="container">
                <di id="contact" class="row text-center">
                    <h2 class="display-6">Contact Me</h2>
                </di>
                <div class="row mt-5 justify-content-center">
                    <div class="col-md-5">
                        <form>
                            <div class="mb-3">
                                <label for="nama" class="nama">Nama Lengkap</label>
                                <input type="text" class="form-control" id="nama" aria-describedby="nama" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" aria-describedby="email" />
                            </div>
                            <div class="mb-3">
                                <label for="Pesan" class="form-label">Pesan </label>
                                <textarea class="form-control" id="pesan" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact;

