export function sealed(param: string) {
    return function (constructor: Function): void {
        console.log(`Sealing the constructor ${param}`);
        console.log(constructor);
        console.log(constructor.prototype);

        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
}

export function logger<TFunction extends Function>(constructor: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(constructor);
        this.age = 30;
    };

    newConstructor.prototype = Object.create(constructor.prototype);
    newConstructor.prototype.printLibrarian = function(): void {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
    };

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function (constructorOrPrototype: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(constructorOrPrototype);
        console.log(methodName);
        console.log(descriptor);
        descriptor.writable = isWritable;
        return descriptor;
    };
}
export function timeout(ms: number) {
    return function (constructorOrPrototype: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (window.confirm('Are you sure?')) {
                setTimeout(() => {
                    originalMethod.apply(this, args);
                }, ms);
            }
        };

        return descriptor;
    };
}

export function logParameter(target: any, methodName: string, index: number) {
    const key = `${methodName}_decor_params_indexes`;
    const proto = typeof target === 'function' ? target.prototype : target;
    (proto[key] ??= []).push(index);
}

export function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const proto = typeof target === 'function' ? target.prototype : target;
        const indices = proto[key];
        if (Array.isArray(indices)) {
            indices.forEach((itemIndex) => {
                console.log(`Method: ${methodName}, ParamIndex: ${itemIndex}, ParamValue: ${args[itemIndex]}`);
            });
        }

        return originalMethod.apply(this, args);
    };

    return descriptor;
}