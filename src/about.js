import './css/main.css';

const About = () => {
    return (
        <section className="about">
		<div className="container">
			<div className="row">
				<h2 className="hidden">Автор</h2>
			</div>	
			<div className="row">						
				<div className="eight columns">					
					<h2 className="about__title">
						Обо мне
					</h2>
					<p className="about__text">
						Меня зовут Сергей Медведкин. Я <em>веб-разработчик</em>. Делаю <em>лэндинги</em>, <em>сайты-визитки</em> под ключ. Выполняю адаптивную верстку под планшеты и смартфоны. Работаю с макетами из графических редакторов Photoshop, Figma. Использую язык программирования JavaScript, чтобы сделать страницы интерактивными и добавить интересные эффекты: <em>меню</em>, <em>панели</em>, <em>слайдеры</em>, различные эффекты анимации и многое другое. Также программирую на стороне сервера на языке программирования PHP.
					</p>					
				</div>
				<div className="four columns">
					<figure className="about__image">
						<img className="about__photo" src="./img/Sergey.jpg" alt="Сергей Медведкин" title="Перейти на страницу &laquo;Обо мне&raquo;" />
						<figcaption  className="about__description">
							Моё фото: Сергей Медведкин
						</figcaption>
					</figure>
				</div>			
			</div>
		</div>	
	</section>
    );
}

export default About;