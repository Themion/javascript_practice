exports.tryCatch = (func) => {
    try { func() } 
    catch (error) { console.error(`${error.name}: ${error.message}`) }
}
