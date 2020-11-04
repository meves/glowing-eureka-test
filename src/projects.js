import './css/main.css';

const Projects = () => {
    return (
        <section className="projects">	
		<div className="container">		
			<div className="row">
				<h2 className="projects__title">Мои проекты</h2>
			</div>				
			<div className="row">					
				<div className="eight columns">			
					<h3 className="projects__project-title">Проект: 'Корпоративный лэндинг'</h3>
					<p className="projects__text">
						Данный тип лэндинга подходит для корпоративных клиентов, среднего и малого бизнеса. Имеет видеофон, блоки для представления товаров и услуг. Можно подчеркнуть главные особеннсти вашей компании, а также рассказать о ведущих специалистах, работающих в ней. Есть форма обратной связи и ссылки на социальные сети. Страница состоит из восьми блоков. Верстка выполнена по макету из графического редактора Photoshop.
					</p>					
				</div>
				<div className="four columns">
					<a className="projects__link" href="Corporate_Landing/corporate_landing.html" target="_blank" title="Перейти на страницу проекта">
						<img className="projects__image" src="./img/corporateLanding.jpg" alt="Corporate Landing" />
					</a>
				</div>				
			</div>	
			<div className="row">				
				<div className="eight columns">			
					<h3 className="projects__project-title">Проект:&nbsp;&nbsp;&nbsp;&nbsp;'Веб-агентство'</h3>
					<p className="projects__text">
						Лэндинг предназначен для веб-студии, но может быть адаптирован под другие виды бизнеса. Акцентирует внимание посетителя на уникальности вашего проекта. Показывает, что вы цените клиента и он важен для вас. Рассказывает о продуктах и ключевых аспектах вашего бизнеса. Описывает главные процессы вашей компании, что повышает уровень доверия со стороны клиента. Подчеркивает заботу о его нуждах. Состоит из двенадцати блоков. Имеет форму обратной связи. Верстка выполнена по макету из графического редактора Photoshop.
					</p>						
				</div>		
				<div className="four columns">
					<a className="projects__link" href="Web_agency/web_agency.html" target="_blank" title="Перейти на страницу проекта">
						<img className="projects__image" src="img/webAgency.jpg" alt="Web Agency" />
					</a>
				</div>			
			</div>
			<div className="row">				
				<div className="eight columns">	
					<h3 className="projects__project-title">Проект:&nbsp;&nbsp;&nbsp;&nbsp;'Голден'</h3>
					<p className="projects__text">
						Небольшой лэндинг из четырех блоков. Имеет систему меню, на основе которой можно сделать многостаничный сайт и использовать его в качестве посадочной страницы. Акцентирует внимание на услугах компании и представляет короткое портфолио работ. Достаточно подробно рассказывает о ключевых сотрудниках. В целом лаконичный, хорошо доносит информацию, имеет приятный дизайн. Верстка выполнена по макету из графического редактора Photoshop.
					</p>						
				</div>
				<div className="four columns">
					<a className="projects__link" href="Golden/golden.html" target="_blank" title="Перейти на страницу проекта">
						<img className="projects__image" src="img/golden.jpg" alt="Golden" />
					</a>
				</div>
			</div>
			<div className="row">					
				<div className="eight columns">	
					<h3 className="projects__project-title">Проект:&nbsp;&nbsp;&nbsp;&nbsp;'Бизнес-тема'</h3>
					<p className="projects__text">
						Лэндинг предназначен как платформа для развития вашего бизнеса. На основное лэндинга возможно создать хорошо развитый многостраничный сайт. Состоит из семи блоков. Меню находится вверху страницы. Имеется две формы для обратной связи с клиентами. Прелагает подробное описание услуг и продуктов компании, рассказывает о вашем бизнесе и предлагает подключить разные тарифные планы. Есть схема для пошагового описания бизнес-процесса компании. Также предусматривается блок с отзывами довольных клиентов. В нижней части дублируется меню, форма обратной связи и можно указать телефон. Естьссылки нагруппы в социальных сетях. Верстка выполнена по макету из графического редактора Photoshop.
					</p>						
				</div>	
				<div className="four columns">
					<a className="projects__link" href="Business_Theme/business_theme.html" target="_blank" title="Перейти на страницу проекта">
						<img className="projects__image" src="img/businessTheme.jpg" alt="Business theme" />
					</a>
				</div>	
			</div>
		</div>	
	</section> 
    );
}

export default Projects;