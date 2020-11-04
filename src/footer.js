import './css/main.css';

const Footer = () => {
    return (
        <footer class="footer">
		<div class="container">
			<div class="row">
				<div class="three columns">
					<p class="footer__text">Автор сайта: Сергей Медведкин</p>
				</div>
				<div class="three columns">
					<p class="footer__text">
						<time datetime="2020-08-20">
							Дата создания: 20.08.2020
						</time>
					</p>
				</div>
				<div class="three columns">
					<a class="footer__text" href="tel:8-918-253-8109">tel: 8-918-253-8109</a>
				</div>
				<div class="three columns email">
					<a class="footer__text" href="mailto:meves.sergey@gmail.com">email: meves.sergey@gmail.com</a>
				</div>					
			</div>
		</div>
	</footer>
    );
}

export default Footer;