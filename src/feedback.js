import './css/main.css';

const Feedback = () => {
    return (
        <section className="feedback">
		<div className="container">
			<div className="row">	
				<h2 className="hidden">Обратная связь</h2>
			</div>	
			<div className="row">					
				<div className="four columns">					
					<h3 className="feedback__title">Сергей Медведкин</h3>
					<p className="feedback__description">
						Верстка сайтов на HTML/CSS<br /> Программирование на JavaScript и PHP
					</p>						
				</div>
				<div className="four columns">					
					<h3 className="feedback__title">Социальные сети</h3>
					<div className="social-links">				
						<a className="social-links__link" href="https://vk.com/s.medvedkin" target="_blank">
							<i className="social-links__item fa fa-vk"></i>
						</a>
						<a className="social-links__link" href="https://www.youtube.com/channel/UCwC1L46t3QZxHfjursuBhdg?view_as=subscriber" target="_blank">
							<i className="social-links__item fa fa-youtube"></i>
						</a>				
						<a className="social-links__link" href="https://github.com/meves" target="_blank">
							<i className="social-links__item fa fa-github"></i>
						</a>
						<a className="social-links__link" href="https://twitter.com/Sergey12590928" target="_blank">
							<i className="social-links__item fa fa-twitter"></i>
						</a>
						<a className="social-links__link" href="https://www.instagram.com/sergeymedvedkin/?hl=ru" target="_blank">
							<i className="social-links__item fa fa-instagram"></i>
						</a>
						<a className="social-links__link" href="https://www.facebook.com/MedvedkinSergey" target="_blank">
							<i className="social-links__item fa fa-facebook-f"></i>
						</a>	
					</div>							
				</div>
				<div className="four columns">					
					<h3 className="feedback__title">Оставить заявку</h3>
					<form className="feedback__form" action="php/order.php" method="POST">				<input className="feedback__input" type="text" name="order[fname]" placeholder="Ваше имя" />
						<input className="feedback__input" type="text" name="order[lname]" placeholder="Ваша фамилия" />	
						<input className="feedback__input" type="email" name="order[email]" placeholder="e-mail" />
						<textarea className="feedback__textarea" name="order[text]" rows="5" placeholder="Текст сообщения"></textarea>
						<label className="feedback__label hidden">С вами свяжутся в ближайшее время</label>
						<input className="feedback__input" type="submit" name="add" value="Отправить" />	
					</form>					
				</div>				
			</div>	
		</div>	
	</section>
    );
}

export default Feedback;