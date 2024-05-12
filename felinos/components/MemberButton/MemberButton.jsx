"use client";
import React, { useState } from "react";
import { Button, IconMember } from "./styles";
import iconMember from "@/public/images/icons/iconMember.svg";
import iconMemberBlue from "@/public/images/icons/iconMemberBlue.svg"; // Alterado para ícone azul

const MemberButton = ({ text }) => {
	const [icon, setIcon] = useState(iconMember);

	const handleMouseOver = () => {
		setIcon(iconMemberBlue); // Altera o ícone para o ícone azul quando o mouse passa por cima
	};

	const handleMouseOut = () => {
		setIcon(iconMember); // Retorna o ícone ao original quando o mouse sai de cima
	};

	return (
		<Button
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			<p>{text}</p>
			<IconMember
				src={icon}
				alt='Icone de carteira'
			/>
			<div className='bgButton'></div>
		</Button>
	);
};

export default MemberButton;
