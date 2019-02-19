# source - returns an iterator of records
def lines_from_file(path):
    with open(path) as handle:
        for line in handle:
            yield line.rstrip('\n')

def matching_lines(lines, pattern):
    for line in lines:
        if pattern in line:
            level, message = line.split(": ", 1)
            yield {"level": level, "message": message}

pattern = "WARNING:"
lines = lines_from_file('./log.txt')
matching = matching_lines(lines, pattern)
for line in matching:
    print(line)

# A program that consumes an an iterator is a sink
