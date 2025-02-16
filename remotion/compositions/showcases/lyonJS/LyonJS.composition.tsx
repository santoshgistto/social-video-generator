import React from 'react';
import {Composition, Folder, Still} from 'remotion';
import {ReplayLyonJS} from './Replay';
import {LayerFullScreen} from './LayerFullScreen';
import {LayerOneSpeaker} from './LayerOneSpeaker';
import {LayerTwoSpeaker} from './LayerTwoSpeaker';

export const LyonJSComposition: React.FC = () => {
	return (
		<Folder name="LyonJS">
			<Composition
				width={1920}
				height={1080}
				id="LyonJSReplay"
				fps={60}
				durationInFrames={320}
				component={ReplayLyonJS}
				defaultProps={{
					title: 'Meetup #80 : Projet XState',
					speakers: [
						{
							name: 'Maxime Blanc',
							picture:
								'https://ca.slack-edge.com/T108ZKPMF-U3VL71HHU-179292d5d86f-512',
						},
					],
					date: '8 férvrier 2023',
					sponsor:
						'https://s3.eu-west-3.amazonaws.com/moovijob.prod/1494438/Horizontal_Black_Logo-Zenika.png',
				}}
			/>
			<Still
				id="LyonJSLayerFullScreen"
				component={LayerFullScreen}
				width={1920}
				height={1080}
			/>
			<Still
				id="LyonJSLayerOneSpeaker"
				component={LayerOneSpeaker}
				defaultProps={{
					title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					sponsorLogoUrl:
						'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg',
				}}
				width={1920}
				height={1080}
			/>
			<Still
				id="LyonJSLayerTwoSpeaker"
				component={LayerTwoSpeaker}
				defaultProps={{
					title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					sponsorLogoUrl:
						'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg',
				}}
				width={1920}
				height={1080}
			/>
		</Folder>
	);
};
