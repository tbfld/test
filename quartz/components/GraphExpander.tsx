// ... existing code ...
const Component: QuartzComponent = () => {
  console.log("=== GraphExpander component rendering ===")
  
  if (typeof window === 'undefined') {
    console.log("=== Window not defined, skipping ===")
    return null
  }

  // Add error handling for WebGL context
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      return gl !== null
    } catch (e) {
      console.error("WebGL initialization failed:", e)
      return false
    }
  }

  useEffect(() => {
    if (!checkWebGLSupport()) {
      console.error("WebGL not supported or context lost")
      return
    }

    // Add event listener for WebGL context lost
    const handleContextLost = (e: Event) => {
      console.log("WebGL context lost, attempting to restore...")
      e.preventDefault()
      // Attempt to reinitialize graph here if needed
    }

    document.addEventListener('webglcontextlost', handleContextLost)
    
    return () => {
      document.removeEventListener('webglcontextlost', handleContextLost)
    }
  }, [])

  // ... rest of existing component code ...
}

// ... rest of existing code ...