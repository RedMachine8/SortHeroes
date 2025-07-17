import { sortHeroesByHealth } from "../sortHerose";

test('Heroes sorting tests', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth([...input]);

    expect(result).toEqual(expected);
});

test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
});