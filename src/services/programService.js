const { Program , University, Degree} = require('../models/index')

class ProgramService{

    // async createProgram(programData){
    //     return await  Program.create(programData)
    // }

    async createProgram(programData){

        const newProgram = await Program.create(programData);

        if(programData.degreeId) {
            const degree = await Degree.findOne( { where: {id: programData.degreeId } });
            if(!degree){
                throw new Error('Degree not found!');
            }
            await newProgram.addDegree(degree);
        }
        return newProgram;
    }

    async updateProgram(id, programData){
        const program = await  Program.findOne({ where: { id } })
        if(!program){
            throw new Error ('Program not found!')        
        }
        
        await program.update(programData)

        if(programData.degreeId) {
            const degree = await Degree.findOne( { where: {id: programData.degreeId } });
            if(!degree){
                throw new Error('Degree not found!');
            }
            await program.setDegrees([degree]);
        }

        return program;
    }

    async deleteProgram(id){
        const program = await Program.findOne({ where: { id } })
        if(!program){
            throw new Error ('Program not found!')        
        }    
        await program.destroy();
        return program;
    }

    async getAllPrograms(){
        return await Program.findAll({ include: [ { model: University, attributes: ['id', 'name', 'emailUniversity'] }] });
    }

    async getProgramById(id){
        const program = await Program.findOne({
             where: {id},
             include: [ { model: University, attributes: ['id', 'name', 'emailUniversity'] }]
         });
        if (!program){
            throw new Error ('Program not found!') 
        }
        return program;
    }

    async getProgramByUniversity(universityId){
        const program = await Program.findOne({
            where: { universityId },
            include: [ { model: University, attributes: ['id', 'name', 'emailUniversity'] }]
        });
        if(!program){
            throw new Error ('Program not found!') 
        }
        return program;
    }
    
    async addDegreeToProgram(programId, degreeId){

        const program = await Program.findOne( { where: {id: programId } } )
        if(!program){
            throw new Error('Program not found!');
        }

        const degree = await Degree.findOne( { where: {id: degreeId } })
        if(!degree){
            throw new Error('Degree not found!')
        }
        
        await program.addDegree(degree)
        return program;
    }
}

module.exports = new ProgramService()