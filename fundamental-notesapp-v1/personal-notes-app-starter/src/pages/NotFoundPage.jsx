import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <section className="not-found-page">
            <h1 className="not-found-page__title">404</h1>
            <p className="not-found-page__description">Halaman yang Anda cari tidak ditemukan.</p>
            <Link to="/" className="not-found-page__link">Kembali ke Beranda</Link>
        </section>
    );
}

export default NotFoundPage;
