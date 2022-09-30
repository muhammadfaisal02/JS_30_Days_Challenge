
        const inputs = document.querySelectorAll('.controls input');
        const outputs = document.querySelectorAll(".output");
        function handleUpdate() {
          const suffix = this.dataset.sizing || '';
          document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
          
        }
        function mssg (){
            alert("Say SubhanAllah")
        }
        
    
        inputs.forEach(input => input.addEventListener('change', handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
        outputs.addEventListener("onclick",mssg())
        