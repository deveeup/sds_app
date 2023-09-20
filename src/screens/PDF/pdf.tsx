import * as React from "react";
import { WebView } from "react-native-webview";

export default function PDFDetails({ route }: any) {
	const { url } = route.params;
	const googleViewer = "https://docs.google.com/gview?embedded=true&url="
	return (
		<WebView source={{ uri: `${googleViewer}${url}` }} />
	)
}
