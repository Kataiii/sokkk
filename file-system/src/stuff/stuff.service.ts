import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { MFile } from '../files/mfile.class';
import { path } from 'app-root-path';
import { FileElementResponse } from '../files/file-element.response';
import { ensureDir, writeFile } from 'fs-extra';
import { Response } from 'express';


@Injectable()
export class StuffService {
	async saveStuffFile(file: MFile, title: string): Promise<FileElementResponse> {
		const uploadFolder = `${path}/uploads/stuff`;
		await ensureDir(uploadFolder);
		await writeFile(`${uploadFolder}/${title}.webp`, file.buffer);
		return {
			url: `stuff/${title}.webp`,
			name: `${title}.webp`
		};
	}

	async sendStuffFile(res: Response, title: string) {
		res.set({'Content-Type': 'image/webp'});
		return res.sendFile(`${path}/uploads/stuff/${title}.webp`);
	}

	convertToWebP(file: Buffer): Promise<Buffer> {
		return sharp(file).webp().toBuffer();
	}
}
