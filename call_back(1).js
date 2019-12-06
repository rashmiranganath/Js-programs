function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    // TODO: print out sentence
    console.log(sentence);
}

// TODO: execute useCallback with the callback as the argument
useCallback(callback);