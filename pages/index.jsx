import React from "react";
import styled from "styled-components";

//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import LandingAnimation from "@/components/LandingPageAnimation";
import Slide from "react-reveal/Slide";
import ProgressBar from "react-progressbar-on-scroll";
import { useTheme } from "styled-components";
import RadialCircleBackground from "@/components/RadialCircleBackground";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortifolioPage from "../pages/portifolio";
import ExperienciaPage from "../pages/experiencia";
import ContatosPage from "../pages/contatos";

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const TitleLandingContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
`;

const TitleLanding = styled.div`
	font-size: 50px;
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};

	@media (max-width: 1400px) {
		font-size: 40px;
	}

	@media (max-width: 1200px) {
		font-size: 36px;
	}

	@media (max-width: 600px) {
		font-size: 26px;
		text-align: center;
		width: 100%;
	}
`;

const SubTitleLanding = styled.div`
	font-weight: 400;
	color: ${(props) => props.theme.colors.body};
	text-align: left;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;

	span {
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1980px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 600px) {
		text-align: center;
	}
`;

const ContainerAnimation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media (max-width: 801px) {
		order: -1;
	}
`;

const SectionOne = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 100vh;
`;

const SectionSobreMim = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	//min-height: 100vh;
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	min-height: 100vh;
	//background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, ${(props) => props.theme.colors.branding} 100%);
`;

const SectionExperiencia = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	min-height: 100vh;
	//padding: 100px;
	//background-color: #ccc;
`;

const SectionContatos = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	min-height: 100vh;
`;

const ButtonSaibaMais = styled.button`
	width: 200px;
	height: 34px;
	color: ${(props) => props.theme.colors.title};
	//border-radius: 4px;
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: ${(props) => props.theme.fontSizes.lg};
	border: 2px solid ${(props) => props.theme.colors.branding};
	transition: all 0.3s ease;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	&:hover {
		background-color: ${(props) => props.theme.colors.branding};
		color: ${(props) => props.theme.colors.background};
		cursor: pointer;
	}

	&:active {
		opacity: 0.5;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export default function HomePage(props) {
	const theme = useTheme();

	return (
		<>
			<ProgressBar color={theme.colors.branding} height={5} />
			<Head title="Homepage" metaDescription="" keywords="" />
			<SectionOne id="section-home">
				<Slide bottom>
					<LandingPageContainer>
						<TitleLandingContainer>
							<SubTitleLanding>Olá, eu sou</SubTitleLanding>
							<TitleLanding>Glayson Visgueira</TitleLanding>
							<SubTitleLanding>
								Desenvolvedor <span>Front-End</span> e desenvolvo interfaces modernas e de alta qualidade, com foco em <span>performance</span>, <span>animações</span>, <span>responsividade</span> e construídas com
								otimização em <span>SEO</span>.
							</SubTitleLanding>
							<ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
							<SocialNetworkRowStack />
						</TitleLandingContainer>
						<ContainerAnimation>
							<LandingAnimation />
						</ContainerAnimation>
					</LandingPageContainer>
				</Slide>
			</SectionOne>

			<SectionSobreMim id="section-sobre-mim">
				<SobreMimPage />
			</SectionSobreMim>
			<SectionPortifolio id="section-portifolio">
				<PortifolioPage />
			</SectionPortifolio>
			<SectionExperiencia id="section-experiencia">
				<ExperienciaPage />
			</SectionExperiencia>
			<SectionContatos id="section-contatos">
				<ContatosPage />
			</SectionContatos>
		</>
	);
}

/*
<TitleLanding>&lt;Glayson Visgueira /&gt;</TitleLanding>
*/
