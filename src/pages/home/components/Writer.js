import React, { PureComponent } from 'react';
import { WriterWrapper ,WrapperTitle1,WrapperTitle2, WrapperAdvert,WrapperAdvert2 } from '../style';

class Writer extends PureComponent  {

	render() {
		return (
			<div>
			<WriterWrapper>
				<img className='Wrapper-img' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='' />
				
				<WrapperTitle1>下载简书手机App</WrapperTitle1>
				<WrapperTitle2>随时随地发现和创作内容</WrapperTitle2>
				
			</WriterWrapper>

			<WrapperAdvert></WrapperAdvert>
			<WrapperAdvert2></WrapperAdvert2>
			</div>
		)
	}
}

export default Writer;
