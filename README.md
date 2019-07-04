# wsdlToswagger
Read a WSDL file and produce a valid swagger descriptor

### Prerequisites
Install Node.

### Installing
Install dependencies 

```
npm install
```

### Execute
From local wsdl file:

```
node index.js ./wsdl_files/Calculator_local.wsdl
```

From remote wsdl file:

```
node index.js https://svn.apache.org/repos/asf/airavata/sandbox/xbaya-web/test/Calculator.wsdl
```

### Verification
After that, go to [ https://editor.swagger.io/ ] https://editor.swagger.io/

And File > Import yaml, and you will see the swagger definition.

