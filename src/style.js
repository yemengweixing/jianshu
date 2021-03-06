 import { createGlobalStyle } from 'styled-components'

 export const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	@font-face {font-family: "iconfont";
	src: url('./statics/1/iconfont.eot?t=1552014952504'); /* IE9 */
	src: url('./statics/1/iconfont.eot?t=1552014952504#iefix') format('embedded-opentype'), /* IE6-IE8 */
	url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPoAAsAAAAACDwAAAOZAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDXIM4ATYCJAMUCwwABCAFhG0HRhtCB8gOJSHBwABgAFBAPPy3fHffzNvNZn5KV0XV6hscj4pGoVqz2NKkA6M4EYqqECpXbVnDRNmcOmfGRlyQiK0MhPUCTlV+qhb7n2vq8vmBrb6dzeV6TZXWTRsF4CiBBhSRWEADDJANjDeMXXkRhwk0q/oh7iZnsuAlGaMC8VCWDOCV0sqa1DAIfcnCFF/B3VDekRcBfPE/H//AP7wousqYeO9Bkhlif3q9zUOj60crdVlAjWcGW0bFHpDE81LrQyj070Ga8js3F0AzKMpPr9fBr6Pe5tXXA1W2I00zqb388apC9IzkCXABA8lPLxsl+BlMlqmjIErld15AwX3ZaSMF3wO44bplRueqqLK2nG3SANxtGBZ1De6XDGN5YdGB3tyW7ayZlwaxh27BzZsswXLEnTvCmNs8n4wZfStPOHxb9ILpx23eN9+6xZUp3G08xBHOsoZM7cNvHXNk2jhXGX2wEXXtw1JWXVHxwo7U8taFhgO6aQAt2ndq6mVijCCM8a8Tye3fDKO36KadIIhnccUlcUHP5mRlvXqdmYn231246EikhKurk9v8r1Z9sKjokV6NIyft3z+JjB1lvBR7yK2mJg+VJKypHiuV17fKgOOR69C9u8hB1t67J0cUh8i6e3cjhpHr1pFDTfm60IGGIo7hnu27dmzd+OxZgumqb+I9Txc4KqZc65V4DTesNybctkTncGS8UY6+41YdrWqnQvWE+yXj7M3LDcp0GbHhL8sF7UKbFtVtu3/r3hEKAW7XJ9Q3VHgMHUGxrnp0FP3q7/jferqrolHkLy9dgptN9VUw73Z0Qn0L8L/UWlM/lmpZkipj6LqUC21StnWOElpFqWn4nc45j8fRLLZOJgwWYyjGrEA1WGMnfw86I2fQG5xDsytl+cg8BRI5jh0TAIQZu6CY8g2qGZfYyX8EnSWfoDcTCJrraLbhyEbIVIKCDRo208YhtGxyOkTLoFFBaj6WBtgMSpLxBTxWVNlF+zG+2VAKdmBljCnqQMlf00RaVJx2Ohkch202J+1SnBZs0pgqTXOF6/Vi2YMYk9MOlDsUmIEGM6MZDUGTmTg5iG51DZV7fz5MMoCNgVJTVJHmYQqV3D7ND8O3BTtF5WhVdC3dVQNJ/Gk0Ih4mUjjZ0ZKhGbOZfieaq7yfBWaiYVT18LqE06NKYlsVM7/G/oxboDEu7KJEjYwuevUpdripLtlBiQaHZDZYZNdHxhkAAAAAAA==') format('woff2'),
	url('./statics/1/iconfont.woff?t=1552014952504') format('woff'),
	url('./statics/1/iconfont.ttf?t=1552014952504') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	url('./statics/1/iconfont.svg?t=1552014952504#iconfont') format('svg'); /* iOS 4.1- */
  }


.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`
