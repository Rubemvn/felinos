"use client";
import React, { useState } from "react";
import {
	ButtonBack,
	ButtonMixer,
	ButtonPlay,
	ButtonSkip,
	Container,
	IconMixer,
	SkipAndBack,
} from "./styles";

import { RiSoundModuleFill } from "react-icons/ri";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";

const Mixer = () => {
	const [mixer, setMixer] = useState(false);
	const [playOrPause, setPlayOrPause] = useState(false);

	return (
		<Container>
			<ButtonMixer
				onClick={() => {
					mixer ? setMixer(false) : setMixer(true);
				}}>
				<RiSoundModuleFill />
			</ButtonMixer>

			{mixer ? (
				<>
					<ButtonPlay
						onClick={() => {
							playOrPause ? setPlayOrPause(false) : setPlayOrPause(true);
						}}>
						{playOrPause ? <FaPlay /> : <FaPause />}
					</ButtonPlay>
					<SkipAndBack>
						<ButtonBack>
							<IoPlayBack />
						</ButtonBack>
						<ButtonSkip>
							<IoPlayForward />
						</ButtonSkip>
					</SkipAndBack>
				</>
			) : (
				""
			)}
		</Container>
	);
};

export default Mixer;
