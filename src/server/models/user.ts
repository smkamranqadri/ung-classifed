import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: 'String',
        required: true,
    },
    password: {
        type: 'String',
        required: true,
    },
    isAdmin: {
        type: 'Boolean',
        required: true,
        default: false,
    },
    dateAdded: {
        type: 'Date',
        default: Date.now,
        required: true,
    }
});

export interface IUser extends mongoose.Document {
    email: string,
    passWord: string,
    isAdmin: boolean,
    dateAdded: Date,
    validatePassword: (pw: string) => {}
}

userSchema.pre('save', function (next) {
    const user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // hash the password using our new salt
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
    return next();
});

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// export default mongoose.model('User', userSchema);
export default mongoose.model<IUser>('User', userSchema);
