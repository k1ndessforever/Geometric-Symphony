// Collection of quotes
    const quotes = [
      "The mathematics of rhythm are universal.",
      "Form and void dance eternally.",
      "Structure creates freedom.",
      "Every point contains infinity.",
      "Geometry is the language of the universe.",
      "Simplicity reveals complexity.",
      "Patterns emerge from chaos.",
      "In constraint lives liberation.",
      "The canvas breathes between forms.",
      "Balance is found in opposition.",
      "Symmetry speaks in silence.",
      "The void gives meaning to form.",
      "Lines connect beyond space.",
      "Structure is the architecture of possibility.",
      "Rhythm exists in stillness.",
      "Geometry defines the unseen.",
      "Meaning emerges between points.",
      "The order behind randomness.",
      "Precision reveals beauty.",
      "Mathematical poetry of space.",
      "Every angle tells a story.",
      "Shapes form the alphabet of cosmos.",
      "The golden ratio speaks in whispers.",
      "Harmony exists in mathematical proportion.",
      "Invisible connections create visible forms.",
      "Perfect imperfection in calculated design.",
      "The grid that liberates expression.",
      "Between order and chaos lives truth.",
      "Patterns that transcend dimension.",
      "The sacred geometry of thought."
    ];
    
    // Canvas container and dimensions
    const container = document.querySelector('.canvas-container');
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Create background circles
    const circlesContainer = document.querySelector('.circles');
    for (let i = 0; i < 5; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      
      const size = Math.min(width, height) * (0.3 + i * 0.15);
      circle.style.width = size + 'px';
      circle.style.height = size + 'px';
      circle.style.left = width / 2 + 'px';
      circle.style.top = height / 2 + 'px';
      
      circlesContainer.appendChild(circle);
    }
    
    // Create nodes
    const nodes = [];
    const nodeCount = 20;
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.classList.add('node');
      
      // Position nodes in a circular pattern
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.3;
      const x = width / 2 + Math.cos(angle) * radius;
      const y = height / 2 + Math.sin(angle) * radius;
      
      node.style.left = x + 'px';
      node.style.top = y + 'px';
      
      // Store node data
      nodes.push({
        element: node,
        x: x,
        y: y,
        angle: angle,
        radius: radius,
        originalX: x,
        originalY: y
      });
      
      container.appendChild(node);
      
      // Add animation
      setInterval(() => {
        const pulseRadius = radius + Math.sin(Date.now() * 0.001 + i) * 20;
        const newX = width / 2 + Math.cos(angle) * pulseRadius;
        const newY = height / 2 + Math.sin(angle) * pulseRadius;
        
        node.style.left = newX + 'px';
        node.style.top = newY + 'px';
        
        nodes[i].x = newX;
        nodes[i].y = newY;
      }, 50);
    }
    
    // Create connections between nodes
    function createConnections() {
      // Remove existing lines
      document.querySelectorAll('.line').forEach(line => line.remove());
      
      // Connect nodes with lines
      for (let i = 0; i < nodes.length; i++) {
        const node1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          
          // Calculate distance
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Create line if nodes are close enough
          if (distance < Math.min(width, height) * 0.25) {
            const line = document.createElement('div');
            line.classList.add('line');
            
            // Set line position and rotation
            line.style.width = distance + 'px';
            line.style.left = node1.x + 'px';
            line.style.top = node1.y + 'px';
            
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            line.style.transform = `rotate(${angle}deg)`;
            
            // Set opacity based on distance
            const opacity = 1 - distance / (Math.min(width, height) * 0.25);
            line.style.opacity = opacity * 0.4;
            
            container.appendChild(line);
          }
        }
      }
    }
    
    // Update connections
    setInterval(createConnections, 100);
    
    // Create geometric patterns
    function createPatterns() {
      const patternCount = 8;
      const centerX = width / 2;
      const centerY = height / 2;
      
      for (let i = 0; i < patternCount; i++) {
        const pattern = document.createElement('div');
        pattern.classList.add('pattern');
        
        // Create different geometric shapes
        const size = Math.min(width, height) * (0.1 + Math.random() * 0.2);
        const sides = Math.floor(Math.random() * 4) + 3; // 3 to 6 sides
        
        if (sides === 3) {
          // Triangle
          pattern.style.width = 0;
          pattern.style.height = 0;
          pattern.style.borderLeft = size / 2 + 'px solid transparent';
          pattern.style.borderRight = size / 2 + 'px solid transparent';
          pattern.style.borderBottom = size + 'px solid rgba(255, 255, 255, 0.05)';
          pattern.style.backgroundColor = 'transparent';
        } else if (sides === 4) {
          // Square or rectangle
          pattern.style.width = size + 'px';
          pattern.style.height = size + 'px';
          pattern.style.backgroundColor = 'transparent';
        } else {
          // Create pseudo circle/pentagon/hexagon with a rounded div
          pattern.style.width = size + 'px';
          pattern.style.height = size + 'px';
          pattern.style.borderRadius = sides === 6 ? '50%' : size / 3 + 'px';
        }
        
        // Position randomly
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * Math.min(width, height) * 0.2;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        pattern.style.left = x - size / 2 + 'px';
        pattern.style.top = y - size / 2 + 'px';
        
        // Add rotation
        pattern.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(pattern);
        
        // Animate pattern
        setInterval(() => {
          const newAngle = angle + Date.now() * 0.0001 * (i % 2 === 0 ? 1 : -1);
          const newDistance = distance + Math.sin(Date.now() * 0.001) * 20;
          const newX = centerX + Math.cos(newAngle) * newDistance;
          const newY = centerY + Math.sin(newAngle) * newDistance;
          
          pattern.style.left = newX - size / 2 + 'px';
          pattern.style.top = newY - size / 2 + 'px';
          pattern.style.transform = `rotate(${Date.now() * 0.01 * (i % 2 === 0 ? 1 : -1)}deg)`;
        }, 50);
      }
    }
    
    // Create animated shapes based on mouse position
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Affect nodes based on mouse position
      nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          // Calculate repulsion
          const angle = Math.atan2(dy, dx);
          const force = (200 - distance) * 0.1;
          
          // Apply repulsion
          const moveX = Math.cos(angle) * force;
          const moveY = Math.sin(angle) * force;
          
          node.element.style.left = (node.x - moveX) + 'px';
          node.element.style.top = (node.y - moveY) + 'px';
          
          // Update node position
          node.x = node.x - moveX;
          node.y = node.y - moveY;
        } else {
          // Gradually return to original position
          const returnX = (node.originalX - node.x) * 0.02;
          const returnY = (node.originalY - node.y) * 0.02;
          
          node.x += returnX;
          node.y += returnY;
          
          node.element.style.left = node.x + 'px';
          node.element.style.top = node.y + 'px';
        }
      });
    });
    
    // Handle click to display quotes
    document.addEventListener('click', (e) => {
      // Create a note
      const note = document.createElement('div');
      note.classList.add('note');
      
      const noteOptions = ['harmony', 'balance', 'form', 'void', 'geometry', 'rhythm', 'pattern', 'structure', 'proportion', 'space', 'point', 'line'];
      const randomNote = noteOptions[Math.floor(Math.random() * noteOptions.length)];
      
      note.textContent = randomNote;
      note.style.left = e.clientX + 'px';
      note.style.top = e.clientY + 'px';
      
      container.appendChild(note);
      
      // Show the note and then fade it out
      setTimeout(() => {
        note.style.opacity = 1;
        
        setTimeout(() => {
          note.style.opacity = 0;
          
          setTimeout(() => {
            note.remove();
          }, 500);
        }, 1000);
      }, 0);
      
      // Display a random quote
      const quoteContainer = document.querySelector('.quote-container');
      const quoteElement = document.querySelector('.quote');
      
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteElement.textContent = randomQuote;
      
      quoteContainer.style.opacity = 1;
      
      setTimeout(() => {
        quoteContainer.style.opacity = 0;
      }, 4000);
      
      // Create expanding shape
      const shape = document.createElement('div');
      shape.classList.add('shape');
      
      const shapeTypes = ['square', 'circle', 'triangle'];
      const randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      
      const size = 10;
      shape.style.left = (e.clientX - size / 2) + 'px';
      shape.style.top = (e.clientY - size / 2) + 'px';
      shape.style.width = size + 'px';
      shape.style.height = size + 'px';
      
      if (randomShape === 'circle') {
        shape.style.borderRadius = '50%';
      } else if (randomShape === 'triangle') {
        shape.style.width = 0;
        shape.style.height = 0;
        shape.style.borderLeft = size / 2 + 'px solid transparent';
        shape.style.borderRight = size / 2 + 'px solid transparent';
        shape.style.borderBottom = size + 'px solid rgba(255, 255, 255, 0.2)';
        shape.style.backgroundColor = 'transparent';
      }
      
      container.appendChild(shape);
      
      // Animate the shape
      setTimeout(() => {
        const expandedSize = 100 + Math.random() * 100;
        
        if (randomShape === 'triangle') {
          shape.style.borderLeft = expandedSize / 2 + 'px solid transparent';
          shape.style.borderRight = expandedSize / 2 + 'px solid transparent';
          shape.style.borderBottom = expandedSize + 'px solid rgba(255, 255, 255, 0.05)';
          shape.style.left = (e.clientX - expandedSize / 2) + 'px';
          shape.style.top = (e.clientY - expandedSize / 2) + 'px';
        } else {
          shape.style.width = expandedSize + 'px';
          shape.style.height = expandedSize + 'px';
          shape.style.left = (e.clientX - expandedSize / 2) + 'px';
          shape.style.top = (e.clientY - expandedSize / 2) + 'px';
        }
        
        shape.style.opacity = 0.1;
        shape.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        
        setTimeout(() => {
          shape.style.opacity = 0;
          
          setTimeout(() => {
            shape.remove();
          }, 500);
        }, 3000);
      }, 0);
    });
    
    // Initialize patterns
    createPatterns();
    
    // Hide instruction after a delay
    setTimeout(() => {
      document.querySelector('.instruction').style.opacity = 0;
    }, 5000);