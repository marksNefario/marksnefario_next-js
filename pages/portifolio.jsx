import React from "react";
import styled from "styled-components";

//Mui components
import Grow from "@mui/material/Grow";

//Custom components
import Head from "@/components/Head";

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.branding};
	font-size: 50px;
	font-weight: 700;
`;

export default function Portifolio() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<Head title="Portifólio" metaDescription="" keywords="" />
			<Grow in={checked}>
				<TitlePage>PORTIFÓLIO</TitlePage>
			</Grow>
		</>
	);
}
