def gen_nums():
    n = 0
    while n < 4:
        yield n
        n += 1

sequence = gen_nums()
print(type(sequence))
