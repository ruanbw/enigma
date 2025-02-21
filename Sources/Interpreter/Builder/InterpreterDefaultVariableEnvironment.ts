export type InterpreterDefaultVariableEnvironment = Readonly<{
    decoder: string;
    decodedBytecode: string;
    stringObject: string;
    vmStateFunction: string;
    vmStateObject: string;
    literalIdsArray: string;
    popFunction: string;
    pushFunction: string;
    instructionSet: string;
    dispatcherFunction: string;
    stringSlicerProp: string;
    finallyAddressProp: string;
    currentThisProp: string;
    stateArrProp: string;
    errorObjectProp: string;
    parentMemoryStorerProp: string;
    randomFuncPropAddr: string;
    funcResultStorerProp: string;
    anyObjectPropSubprop: string;
    randomFuncProp: string;
    stringDumpProp: string;
    catchAddrProp: string;
    memoryProp: string;
    randomFuncPropFunc: string;
    callerProp: string;
    literalLoaderAliasFunction: string;
    literalLoaderFunction: string;
    exceptionHandlerFunction: string;
    stateIndex1GetterFunction: string;
    globalObject: string;
    bytecode: string;
    bytecodeLength: string;
    bytecodeReturnFunction: string;
    promise: string;
    regeneratorRuntime: string;
    bytecodeLengthAndTrueLength: string;
    literalLength: string;
    loadRegFunction: string;
}>;