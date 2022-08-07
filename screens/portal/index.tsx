import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PortalWebView(props) {
    const CustomHeaderWebView = (props) => {
        const { uri, onLoadStart, ...restProps } = props;
        const [currentURI, setURI] = useState(props.source.uri);
        const newSource = { ...props.source, uri: currentURI };
        return (
          <WebView
            {...restProps}
            source={newSource}
            sharedCookiesEnabled={true}
            onShouldStartLoadWithRequest={(request) => {
              // If we're loading the current URI, allow it to load
              if (request.url === currentURI) return true;
              // We're loading a new URL -- change state first
              setURI(request.url);
              return false;
            }}
          />
        );
    };
    const privateLocalUrl = 'https://ums.calebuniversity.edu.ng';
    return(
        <CustomHeaderWebView
            source={{
                uri: privateLocalUrl,
                headers: {
                    Cookie: 'cookie1=asdf; cookie2=dfasdfdas',
                    'my-custom-header-key': 'my-custom-header-value',
                },
            }}
        />;
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});