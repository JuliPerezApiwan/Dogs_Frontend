    const validate = (form) => {
        let errors = {}
        if(!form.name) {
            errors.name = 'Name is required'
        }
        if(!form.min_height || !form.max_height) {
            errors.height = "Height is required"
        }
        if(!form.min_weight || !form.max_weight) {
            errors.weight = "Weight is required"
        }
        if(!form.life_span) {
            errors.life_span = 'Lifespan is required'
        }
         if(form.temperamentID < 3){
           errors.temperamentID = 'Se requieren al menos tres(3) temperamentos';
         }
        return errors
    }

export default validate;